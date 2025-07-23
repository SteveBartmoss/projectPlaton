import './appLayout.css'

export function AppLayout({children}){
    return(
        <div className="div-app-layout">
            <div>
                <h1>Tob Bar</h1>
            </div>
            <div>
                {children}
            </div>
            <div>
                <h1>footer</h1>
            </div>
        </div>
    )
}