export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex items-center justify-center py-10">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Digital Human Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
