'use client'

import { Send } from 'lucide-react'
import React from 'react'

export const Newsletter: React.FC = () => {
  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <input 
          type="email" 
          placeholder="Your email address" 
          className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 rounded-md focus:outline-none focus:border-[hsl(var(--brand-primary))] transition-colors"
        />
        <button 
          type="submit" 
          className="absolute right-1 top-1 bg-[hsl(var(--brand-primary))] text-white p-2 rounded hover:bg-amber-600 transition-colors"
          aria-label="Subscribe"
        >
          <Send size={16} />
        </button>
      </div>
      <p className="text-xs text-neutral-500">
        By subscribing, you agree to our Privacy Policy.
      </p>
    </form>
  )
}
