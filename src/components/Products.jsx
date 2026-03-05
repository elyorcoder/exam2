import { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const Id = 0;
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((data) => {
      setProduct(data?.data.products);
    });
  }, []);
  console.log(products);
  return (
    <div>
      <button className="btn-add" onClick={() => {}}>
        Add +
      </button>
      <div className="t1">
        <table className="t2">
          <thead>
            <tr>
              <td>Id</td>
              <td>Image</td>
              <td>Price</td>
              <td>Descriptions</td>
              <td>Title</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {products.map(
              ({ images, price, description, title, id }, index) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <img width={80} src={images?.[0]} alt={title} />
                  </td>
                  <td>{price}$</td>
                  <td>{description}</td>
                  <td>{title}</td>
                  <td className="td">
                    <button
                      className="t3"
                      onClick={() => {
                        return <div className="ad">
                            <img width={300} src={images?.[0]} alt={title} />
                            <h1>
                                {title}
                            </h1>
                            <h2>{price}</h2>
                            <h2>
                                {description}
                            </h2>
                        </div>;
                      }}
                    >
                      view
                    </button>
                    <button
                      className="t3"
                      onClick={() => {
                        prompt(`${id} cardni malumotini kiriting`);
                        console.log(products[id]);
                        alert(`${id} item successful edited`);
                      }}
                    >
                      edit
                    </button>
                    <button
                      className="t3"
                      onClick={() => {
                        console.log(products[id]);
                        alert(`${id} item successful deleted 

malumot console ga keldi`);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
