import { ProductCategoryRow } from "./components/produits/productCategoryRow"
import { ProductRow } from "./components/produits/productRow"

export function ProductsTable({products}){

    const rows = []
    let last_category = null

    for (const product of products) {
        if (product.category !== last_category) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category}/>)
        }
        last_category =product.category
        rows.push(<ProductRow produits={product} key={product.name}/>)
    }
    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>
}
