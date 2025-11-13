// Layout is technically isnt just anything else but a component
// but it works on the principle of children
// Children is nothing else but the props that is a type React.ReactNode  ,
// so basically it is another component so we can pass
// that we can pass within this layout for it to render


const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <p> Dashboard navbar </p>
        {children}
    </div>
  )
}

export default Layout
