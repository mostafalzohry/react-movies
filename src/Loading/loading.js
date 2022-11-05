import './style.css'
export default function ChangeLoader() {

    return (
        <div className="loading">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}