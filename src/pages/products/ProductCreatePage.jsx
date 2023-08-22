

export const ProductCreatePage = () => {


  return (
    <>
      {/* <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h5>AGREGAR PRODUCTO</h5>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">AGREG</li>
                </ol>
              </div>
          </div>
        </div>
      </section> */}

      <section className="content p-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card card-primary">
              <div className="card-body">
                <div className="form-group">
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Nombre del producto"
                  />
                </div>
                <div className="form-group">
                  <select
                    id="inputStatus"
                    className="form-control custom-select"
                  >
                    <option selected disabled>
                      Selecciona una categoria
                    </option>
                    <option>Celulares</option>
                    <option>Tablets</option>
                    <option>Notebooks</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="inputClientCompany"
                    className="form-control"
                    placeholder="Precio $"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    id="inputDescription"
                    className="form-control"
                    rows="4"
                    placeholder="Detalle de Producto"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <input
              type="submit"
              value="Create new Project"
              className="btn btn-success btn-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};
