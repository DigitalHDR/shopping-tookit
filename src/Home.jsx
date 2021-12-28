import Itemscards from './Itemscards'
import data from './data'

function Home() {
  return (
    <div>
      <div className="text-center mt-3">All Items</div>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <Itemscards
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home
