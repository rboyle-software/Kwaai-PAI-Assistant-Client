'use client'

import React, { useState, useEffect } from "react"

// Get user permissions from session storage
const getUserPermissions = (): string[] => {
  // if (typeof window !== 'undefined') {
  //   const stored = sessionStorage.getItem('userPermissions')
  //   return stored ? JSON.parse(stored) : []
  // }
  return [ 'viewer' ];
  // return [ 'admin' ];
  // return [ 'viewer', 'admin' ];
}

interface PermissionsWrapperProps {
  permissions?: string[]
  children: React.ReactNode
}

export default function PermissionsWrapper({ permissions = [], children }: PermissionsWrapperProps) {
  const [hasPermission, setHasPermission] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const userPermissions = getUserPermissions()

    // If no permissions required, always render
    if (permissions.length === 0) {
      setHasPermission(true)
      setIsLoading(false)
      return
    }

    // Check if user has any of the required permissions
    const hasRequiredPermission = permissions.some(permission =>
      userPermissions.includes(permission)
    )

    setHasPermission(hasRequiredPermission)
    setIsLoading(false)
  }, [permissions])

  if (isLoading) {
    return <div>Loading permissions...</div>
  }

  if (!hasPermission) {
    return null // Don't render anything if user doesn't have permission
  }

  return <>{children}</>
}

// Example components that don't need to handle permissions themselves
export function ViewerComponent() {
  return (
    <h2>A header that requires VIEWER permissions</h2>
  )
}

export function AdminComponent() {
  return (
    <h2>A header that requires ADMIN permissions</h2>
  )
}

export function AdminOrViewerComponent() {
  return (
    <h2>A header that requires VIEWER or ADMIN permissions</h2>
  )
}


