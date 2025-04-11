'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

type Subscription = {
  id: string
  email: string
  subscription_date: string
  status: string
  source: string
  unsubscribed_at?: string
  created_at: string
}

// Define the DbStatus type
type DbStatus = {
  exists: boolean
  columns: any[]
}

export default function NewsletterAdmin() {
  const [subscriptions, setSubscriptions] = useState([] as Subscription[])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [testEmail, setTestEmail] = useState('')
  const [dbStatus, setDbStatus] = useState({
    exists: false,
    columns: []
  } as DbStatus)

  useEffect(() => {
    checkDatabase()
    loadSubscriptions()
  }, [])

  async function checkDatabase() {
    try {
      // Check if table exists
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .select('id')
        .limit(1)
      
      const tableExists = !error || error.code !== '42P01'
      
      // Get columns
      let columns: any[] = []
      if (tableExists) {
        const { data: columnsData } = await supabase
          .rpc('get_table_columns', { table_name: 'newsletter_subscriptions' })
        
        if (columnsData) {
          columns = columnsData
        }
      }
      
      setDbStatus({
        exists: tableExists,
        columns
      })
    } catch (err) {
      console.error('Error checking database:', err)
    }
  }

  async function loadSubscriptions() {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('newsletter_subscriptions')
        .select('*')
        .order('subscription_date', { ascending: false })
      
      if (error) throw error
      
      setSubscriptions(data || [])
    } catch (err) {
      console.error('Error loading subscriptions:', err)
      setError('Failed to load subscriptions')
    } finally {
      setLoading(false)
    }
  }

  async function runDbInitialization() {
    try {
      const response = await fetch('/api/init-db')
      const result = await response.json()
      
      alert(`Database initialization: ${result.message}`)
      checkDatabase()
      loadSubscriptions()
    } catch (err) {
      console.error('Error initializing database:', err)
      alert('Failed to initialize database')
    }
  }

  async function testSubscription() {
    if (!testEmail) {
      alert('Please enter a test email')
      return
    }
    
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: testEmail })
      })
      
      const result = await response.json()
      alert(`Subscription test: ${result.message}`)
      loadSubscriptions()
    } catch (err) {
      console.error('Error testing subscription:', err)
      alert('Failed to test subscription')
    }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Newsletter Admin</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Database Status</h2>
          <p className="mb-2">
            <span className="font-medium">Table exists:</span>{' '}
            <span className={dbStatus.exists ? 'text-green-600' : 'text-red-600'}>
              {dbStatus.exists ? 'Yes' : 'No'}
            </span>
          </p>
          
          {dbStatus.columns.length > 0 && (
            <div>
              <p className="font-medium mb-2">Columns:</p>
              <ul className="text-sm">
                {dbStatus.columns.map((col: any) => (
                  <li key={col.column_name} className="mb-1">
                    {col.column_name}: {col.data_type}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <button
            onClick={runDbInitialization}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Initialize Database
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Test Subscription</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Test Email</label>
            <input
              type="email"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="test@example.com"
            />
          </div>
          
          <button
            onClick={testSubscription}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Test Subscribe
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h2 className="text-xl font-semibold p-6 border-b">Newsletter Subscriptions</h2>
        
        {loading ? (
          <div className="p-6 text-center">Loading...</div>
        ) : error ? (
          <div className="p-6 text-center text-red-600">{error}</div>
        ) : subscriptions.length === 0 ? (
          <div className="p-6 text-center text-gray-500">No subscriptions found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {subscriptions.map((sub) => (
                  <tr key={sub.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{sub.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(sub.subscription_date).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          sub.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {sub.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{sub.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
} 