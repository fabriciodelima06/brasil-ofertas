import './custom.css'

export default function Loading() {
    return (
        <div 
            className="lds-roller" 
            style={{
                width: '100%',
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    )
}