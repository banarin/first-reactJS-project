/**
 * 
 * @param {{name:string,stoked:string,price:string}} produits 
 * @returns 
 */

export function ProductRow({produits}) {

    const style = produits.stocked ? undefined : {color: "red"}
    return <tr>
        <td style={style}>
            {produits.name}
        </td>
        <td>
            {produits.price}
        </td>
    </tr>
}