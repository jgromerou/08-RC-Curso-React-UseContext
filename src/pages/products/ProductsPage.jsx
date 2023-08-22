import React from "react";
import { Link } from "react-router-dom";

export const ProductsPage = () => {
  return (
    <section className="content p-5">
      <div className="row justify-content-center mb-5">
          <div className="col-12">
            <Link to={'/product-add'} className="btn btn-primary btnlg">Nuevo Producto</Link>
          </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            {/* <div className="card-header">
              <h3 className="card-title">Condensed Full Width Table</h3>
            </div> */}

            <div className="card-body p-0">
              <table className="table table-lg">
                <thead>
                  <tr>
                    <th style={{ width: 10 }}>#</th>
                    <th>Task</th>
                    <th>Progress</th>
                    <th style={{ width: 40 }}>Label</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Update software</td>
                    <td>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-danger"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-danger">55%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Clean database</td>
                    <td>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-warning">70%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Cron job running</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-primary">30%</span>
                    </td>
                  </tr>
                  <tr>
                    <td>4.</td>
                    <td>Fix and squish bugs</td>
                    <td>
                      <div className="progress progress-xs progress-striped active">
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-success">90%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
