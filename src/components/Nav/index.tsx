const nav = () => {
    return ( 
    <header className="w-full h-28 bg-red-600 flex gap-3 items-center">
        <div className="flex items-center justify-center w-[30%]">
            Logo
        </div>
      <nav className="container flex items-center justify-between">
        
        <ul className="flex gap-4">
            <li>Pagina Inicial</li>
            <li>Categorias</li>
            <li>favoritos</li>
            <li>Contato</li>
        </ul>
      </nav>
    </header> );
}
 
export default nav;