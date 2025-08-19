export default function Button({children, type, handler}) {
    const style = type === 'danger' ? 'bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded shadow' : 'bg-blue-500 text-white px-3 py-2 rounded shadow hover:bg-blue-700'; 
    return (
        <button className={style} onClick={handler}>
            {children}
        </button>
    )
}