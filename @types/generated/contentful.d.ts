// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface IExhibitionFields {
  /** Name */
  name?: string | undefined

  /** Venue */
  venue?: string | undefined

  /** Date */
  date?: string | undefined

  /** Image */
  image?: Asset[] | undefined
}

export interface IExhibition extends Entry<IExhibitionFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'exhibition'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IImageFields {
  /** Title */
  title: string

  /** Photo */
  photo?: Asset | undefined

  /** Image caption */
  imageCaption?: string | undefined

  /** Image credits */
  imageCredits?: string | undefined
}

export interface IImage extends Entry<IImageFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'image'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'exhibition' | 'image'

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
