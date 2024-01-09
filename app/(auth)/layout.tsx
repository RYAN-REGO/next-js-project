const Layout = ({children} : {children : React.ReactNode}) => {
    return(
        <div className="min-h-screen flex-center w-full">
            {children}
        </div>
    )
}

export default Layout;