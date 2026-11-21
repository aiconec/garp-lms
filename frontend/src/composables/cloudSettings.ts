import type { CloudContext } from '@frappe/cloud-sdk'
import { usersStore } from '@/stores/user'

export const cloudContext = (): CloudContext | undefined =>
	usersStore().userResource.data?.cloud_settings

// GARP is not hosted on Frappe Cloud: never show its billing/marketplace panels,
// trial card or banner, even if a site's config says otherwise.
export const hasCloudSettings = (): boolean => false

// A System Manager on a Frappe Cloud v1 site keeps the old trial banner and login
export const isV1CloudAdmin = (): boolean => false

// LMS's __ returns a { format } object for a placeholder message given no
// values, so always pass an array to get a string back.
export const translate = (message: string, values?: unknown[]): string =>
	__(message, (values ?? []) as (string | number)[])
