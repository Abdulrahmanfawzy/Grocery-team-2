export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-6">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Grocery App. All rights reserved.</p>
      </div>
    </footer>
  )
}
