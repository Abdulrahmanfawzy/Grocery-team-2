import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TableProps {
  children: ReactNode
  className?: string
}

interface TableRowProps {
  children: ReactNode
  className?: string
}

interface TableCellProps {
  children: ReactNode
  className?: string
  isHeader?: boolean
}

export function Table({ children, className }: TableProps) {
  return (
    <div className="relative w-full overflow-auto">
      <table className={cn('w-full caption-bottom text-sm', className)}>
        {children}
      </table>
    </div>
  )
}

export function TableHeader({ children, className }: TableProps) {
  return <thead className={cn('[&_tr]:border-b', className)}>{children}</thead>
}

export function TableBody({ children, className }: TableProps) {
  return <tbody className={cn('[&_tr:last-child]:border-0', className)}>{children}</tbody>
}

export function TableRow({ children, className }: TableRowProps) {
  return (
    <tr
      className={cn(
        'border-b transition-colors hover:bg-muted/50',
        className,
      )}
    >
      {children}
    </tr>
  )
}

export function TableCell({ children, className, isHeader }: TableCellProps) {
  if (isHeader) {
    return (
      <th
        className={cn(
          'h-12 px-4 text-left align-middle font-medium text-muted-foreground',
          className,
        )}
      >
        {children}
      </th>
    )
  }
  return (
    <td className={cn('p-4 align-middle', className)}>{children}</td>
  )
}
