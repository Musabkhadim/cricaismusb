"use client"

import { useEffect, useRef, useState } from "react"

interface CKEditorWrapperProps {
  value: string
  onChange: (data: string) => void
  placeholder?: string
}

export function CKEditorWrapper({ value, onChange, placeholder = "Enter description..." }: CKEditorWrapperProps) {
  const editorRef = useRef<any>(null)
  const [isEditorReady, setIsEditorReady] = useState(false)

  useEffect(() => {
    const loadCKEditor = async () => {
      if (typeof window !== "undefined") {
        const { ClassicEditor } = await import("@ckeditor/ckeditor5-editor-classic")
        const { Essentials } = await import("@ckeditor/ckeditor5-essentials")
        const { Bold, Italic, Underline } = await import("@ckeditor/ckeditor5-basic-styles")
        const { Link } = await import("@ckeditor/ckeditor5-link")
        const { Paragraph } = await import("@ckeditor/ckeditor5-paragraph")
        const { List } = await import("@ckeditor/ckeditor5-list")
        const { Heading } = await import("@ckeditor/ckeditor5-heading")
        const { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload } = await import("@ckeditor/ckeditor5-image")

        if (editorRef.current && !isEditorReady) {
          try {
            const editor = await ClassicEditor.create(editorRef.current, {
              plugins: [
                Essentials,
                Bold,
                Italic,
                Underline,
                Link,
                Paragraph,
                List,
                Heading,
                Image,
                ImageCaption,
                ImageStyle,
                ImageToolbar,
                ImageUpload,
              ],
              toolbar: {
                items: [
                  "heading",
                  "|",
                  "bold",
                  "italic",
                  "underline",
                  "|",
                  "link",
                  "|",
                  "bulletedList",
                  "numberedList",
                  "|",
                  "imageUpload",
                  "|",
                  "undo",
                  "redo",
                ],
              },
              placeholder,
              link: {
                addTargetToExternalLinks: true,
                defaultProtocol: "https://",
              },
              image: {
                toolbar: ["imageStyle:inline", "imageStyle:block", "imageStyle:side", "|", "imageTextAlternative"],
              },
              heading: {
                options: [
                  { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
                  { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
                  { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
                  { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
                ],
              },
            })

            editor.model.document.on("change:data", () => {
              onChange(editor.getData())
            })

            editor.setData(value)
            setIsEditorReady(true)
          } catch (error) {
            console.error("Error initializing CKEditor:", error)
          }
        }
      }
    }

    loadCKEditor()

    return () => {
      if (editorRef.current && isEditorReady) {
        editorRef.current.destroy?.()
      }
    }
  }, [])

  return (
    <div className="border rounded-lg overflow-hidden bg-white dark:bg-gray-800">
      <div ref={editorRef} className="min-h-[250px] prose max-w-none" />
    </div>
  )
}
