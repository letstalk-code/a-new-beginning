'use client'

import Link from 'next/link'
import { PHONE_LINK, TEXT_LINK } from '@/lib/constants'

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-gray-200 z-50 shadow-lg">
      <div className="grid grid-cols-3">
        <a
          href={PHONE_LINK}
          className="flex flex-col items-center justify-center py-3 text-forest-900 hover:bg-gray-50 transition-colors"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wide">Call</span>
        </a>

        <a
          href={TEXT_LINK}
          className="flex flex-col items-center justify-center py-3 text-forest-900 hover:bg-gray-50 transition-colors border-x border-gray-200"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wide">Text</span>
        </a>

        <Link
          href="/for-referrers"
          className="flex flex-col items-center justify-center py-3 bg-terra-500 text-white hover:bg-terra-500/90 transition-colors"
        >
          <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wide">Refer</span>
        </Link>
      </div>
    </div>
  )
}
