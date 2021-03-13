const repositoryName = 'unform';

export function RepositoryList() {
    return(
        <section className="repository-List">
            <h1>Lista de Repositórios</h1>
                <ul>
                    <li>
                        <strong>{repositoryName}</strong>
                        <p>Forms in React</p>

                        <a href="">
                            Acessar repositórios
                        </a>
                    </li>
                </ul>
            
        </section>
    )
}