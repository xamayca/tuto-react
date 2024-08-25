import {ProductCategoryRow} from "./ProductCategoryRow.jsx";
import {ProductRow} from "./ProductRow.jsx";

export function ProductTable({products}) {
    const rows = [];
    let lastCategory = null;

    for(let product of products) {
        if (product.category !== lastCategory){
            rows.push(<ProductCategoryRow key={product.category} name={product.name} />)
        }
        lastCategory = product.category;
        rows.push(<ProductRow product={product} key={product.name}  />)
    }

    return <>

        <style>
            {`
            table {
                border-collapse: collapse;
                width: 100%;
            }
            th, tr, td {
                border: 1px solid black;
                padding: 8px;
                text-align: center;
            }
            `}
        </style>

        <table>
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
    </>;
}
