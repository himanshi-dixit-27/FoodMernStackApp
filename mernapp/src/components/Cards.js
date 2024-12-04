import React from 'react'

export default function Cards() {
    return (
        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0521/3929/4884/products/TheosEgglessDutchTrufflePastry1.jpg?v=1632145521" alt="Card image cap" style={{maxHeight: "100px"}}/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some content</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 rounded'>
                            {
                                Array.from(Array(6), (e,i) => {
                                    return(
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className="m-2 h-100 bg-success rounded">
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline fs-5">
                            Total Price
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
