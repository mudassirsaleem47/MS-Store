'use client'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { UploadCloud } from 'lucide-react'
import { useState } from 'react'

export const ProductCustomization = () => {
  const [hasCustomization, setHasCustomization] = useState(false)

  return (
    <div className="border rounded-lg p-6 bg-card text-card-foreground shadow-sm my-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          🎨 Customize Your Order
        </h3>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
          Optional
        </span>
      </div>

      <div className="space-y-6">
        {/* Text Customization */}
        <div className="space-y-2">
          <Label htmlFor="custom-text" className="text-base">
            Add Text or Instructions
          </Label>
          <Textarea 
            id="custom-text" 
            placeholder="Enter names, dates, or specific instructions for your print..."
            className="min-h-[80px] resize-none"
          />
        </div>

        {/* File Upload Simulation */}
        <div className="space-y-2">
          <Label className="text-base">Upload Design / Logo</Label>
          <div className="border-2 border-dashed border-input hover:border-primary/50 transition-colors rounded-lg p-8 flex flex-col items-center justify-center gap-2 cursor-pointer bg-muted/20">
            <UploadCloud className="w-8 h-8 text-muted-foreground" />
            <div className="text-center">
              <p className="text-sm font-medium">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground mt-1">SVG, PNG, JPG or PDF (max. 10MB)</p>
            </div>
            {/* Visual only input */}
            <input type="file" className="hidden" /> 
          </div>
        </div>
      </div>
    </div>
  )
}
