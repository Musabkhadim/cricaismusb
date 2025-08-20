"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Home } from "lucide-react"
import { useRouter } from "next/navigation"

interface SubmissionConfirmationPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SubmissionConfirmationPopup({ open, onOpenChange }: SubmissionConfirmationPopupProps) {
  const router = useRouter()

  const handleNavigate = (path: string) => {
    onOpenChange(false) // Close popup
    router.push(path)   // Navigate to path
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center border-0 shadow-xl bg-white dark:bg-gray-900 animate-in fade-in-0 zoom-in-95 duration-500 rounded-2xl">
        <div className="space-y-6 py-6">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ✅ Business Submitted Successfully!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm px-4">
              Your business has been submitted. Our team will review it shortly and notify you once it's live on Cricaismus.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-950 dark:to-blue-950 p-4 rounded-xl text-sm text-gray-700 dark:text-gray-200">
            <strong>Next steps:</strong> <br />
            After verification, your listing will be published automatically.
          </div>

          <div className="flex flex-col sm:flex-row gap-3 px-3">
            <Button
              className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium shadow-md hover:scale-105 transition-transform"
              onClick={() => handleNavigate('/')}
            >
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <Button
              variant="outline"
              className="flex-1 hover:bg-blue-50 dark:hover:bg-blue-950 border-gray-300 dark:border-gray-700"
              onClick={() => handleNavigate('/directory')}
            >
              Browse Directory
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
