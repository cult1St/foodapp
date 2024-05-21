import { useEffect, useState } from "react";


export const Main = ()=>{

  const [Categories, setCategories] = useState(null)
  const [loading, setLoading] = useState(true)
  //create a function
  const fetchFoodCategories = ()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(function(dat){
      return dat.json();
    })
    .then(function(data){
      console.log(data)
      setCategories(data.categories)
      setLoading(false)
    })
  }
  
  /** Use effect */
  useEffect(function(){
    fetchFoodCategories()
  }, []);
  console.log(Categories)
    return(
        <>
            <main>
  {/* banner section */}
  <section
   
    className="container-fluid p-0 m-0"
    style={{
      backgroundImage: 'url("restaurant/assets/images/hero-bg.jpg")',
      height: 300,
      backgroundSize: "cover"
    }}
  >
    <div
      className="row"
      style={{ backgroundColor: "rgba(0,0,0,0.7)", height: "inherit" }}
    >
      {loading?"<h1 className='text-primary'>LOading...</h1>":""}
      <div className="col">
        <h1 className="text-center text-light mt-4" style={{ lineHeight: 5 }}>
          Eat Healthy, Stay Healthy.
        </h1>
      </div>
    </div>
  </section>
  {/* end banner section */}
  <div className="album py-5 bg-light">
    <div className="container" id="shopnow">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center mb-3">Welcome Home!</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Categories of menu starts */}
          <h5 className="mb-3 text-danger">CATEGORIES</h5>
          {/* category item*/}
          {
           Categories && Categories.map((value)=>{
              return(
                <div className="row g-3" id="shopnow">
                <div className="col-md-2">
                  <img src={value.strCategoryThumb} alt="" className="img-fluid" />
                </div>
                <div className="col-md-8">
                  <h5>{value.strCategory}</h5>
                  <p>
                    {value.strCategoryDescription}
                  </p>
                  <button className="btn btn-warning btn-sm">
                    Get Ingredients
                  </button>
                </div>
                <hr />
              </div>
              )
            })
          }
         
        </div>
        {/* end category item*/}
       
      </div>
      {/* end category item*/}
      {/* Categories of menu ends */}
    </div>
  </div>
</main>

        </>
    )
}