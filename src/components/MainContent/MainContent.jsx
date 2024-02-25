import { useEffect, useRef, useState } from "react";
import "./Maincontent.scss";

const dataTable = [
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+a", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 97+ plus / OSX.2+", "1.7", "A"],
  ["Gecko", "Firefox 2.0", "Win 97+ plus / OSX.2+", "1.7", "D"],
  ["Gecko", "Firefox 2.0", "Win 97+ plus / OSX.2+", "1.7", "D"],
  ["Gecko", "Firefox 2.0", "Win 97+ plus / OSX.2+", "1.7", "D"],
  ["Gecko", "Firefox 2.0", "Win 97+ plus / OSX.2+D", "1.7", "D"],
  ["Gecko", "Firefox 2.0", "Win 97+ plus / OSX.2+", "1.7", "D"],
  ["Gecko", "Firefox 2.0", "Win 97+ plus / OSX.2+", "1.7", "D"],
  ["Phong", "Firefox 2.0", "Win 97+ plus / OSX.2+", "1.7", "D"],
  ["Phong", "Firefox 2.0", "Win 97+ plus / OSX.2+", "1.7", "D"],
  ["Phong", "Firefox 2.0", "Win 97+ plus / OSX.2+", "1.7", "D"],
  ["Phong", "Firefox 2.0", "Win 98+ / OSX.2+", "1.7", "D"],
  ["Phong", "Firefox 2.0", "Win 98+ / OSX.2+", "1.7", "D"],
  ["Phong", "Firefox 2.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Phong", "Firefox 2.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Phong", "Firefox 2.0", "Win 98+ / OSX.2+a", "1.7", "A"],
  ["Phong", "Firefox 2.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Phong", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Phong", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Phong", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Phong", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Phong", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Phong", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Phong", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Phong", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+a", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+a", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+a", "1.7", "A"],
  ["Ba", "Firefox 3.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Ba", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
  ["Gecko", "Firefox 1.0", "Win 98+ / OSX.2+", "1.7", "A"],
];
const indexPagination = ["1", "2", "3", "4", "5", "6"];
function MainContent() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentDataTable, setCurrentDataTable] = useState(
    dataTable.slice(0, 10)
  );
  const itemPerPage = useRef(10);

  useEffect(() => {
    const startIndex = currentPage * itemPerPage.current;
    const endIndex = Math.min(
      startIndex + itemPerPage.current,
      dataTable.length
    );
    setCurrentDataTable(dataTable.slice(startIndex, endIndex));
  }, [currentPage]);

  const handleClickPagination = (index) => {
    setCurrentPage(index);
  };

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleClickPrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <div className="table__header d-flex">
        <div className="table__header--left">
          <h1>Data tables</h1>
          <p>advanced tables</p>
        </div>
        <div className="table__header--right">
          <a>
            <i className="fa-solid fa-gauge"></i>Home
          </a>
          <i className="fa-solid fa-chevron-right"></i>
          <a>Tables</a>
          <i className="fa-solid fa-chevron-right"></i>
          <a style={{ color: "#777777" }}>Data tables</a>
        </div>
      </div>

      <div className="table__main">
        <div className="table__main--title">Hover Data Table</div>
        <div className="table__main--content">
          <div className="row">
            <div className="col">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">
                      Rendering engine
                      <i
                        className="fa-solid fa-arrow-down-short-wide"
                        style={{ opacity: "0.7" }}
                      ></i>
                    </th>
                    <th scope="col">
                      Brower
                      <i
                        className="fa-solid fa-sort"
                        style={{ opacity: "0.2" }}
                      ></i>
                    </th>
                    <th scope="col">
                      Platform(s)
                      <i
                        className="fa-solid fa-sort"
                        style={{ opacity: "0.2" }}
                      ></i>
                    </th>
                    <th scope="col">
                      Engine version
                      <i
                        className="fa-solid fa-sort"
                        style={{ opacity: "0.2" }}
                      ></i>
                    </th>
                    <th scope="col">
                      CSS grade
                      <i
                        className="fa-solid fa-sort"
                        style={{ opacity: "0.2" }}
                      ></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentDataTable.map((row, index) => {
                    return (
                      <tr key={index}>
                        {row.map((col, i) => {
                          return <td key={i}>{col}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="col">Rendering engine</th>
                    <th scope="col">Brower</th>
                    <th scope="col">Platform(s)</th>
                    <th scope="col">Engine version</th>
                    <th scope="col">CSS grade</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        <div className="table__pagination">
          <div className="table__pagination--left">
            {`Showing ${currentPage * itemPerPage.current + 1} to ${Math.min(
              currentPage * itemPerPage.current + itemPerPage.current,
              dataTable.length
            )} of ${dataTable.length} entries`}
          </div>
          <div className="table__pagination--right">
            <nav aria-label="Page navigation example">
              <ul className="pagination pagination  my-pagination">
                <li
                  className="page-item"
                  style={{ pointerEvents: currentPage === 0 ? "none" : "auto" }}
                  onClick={handleClickPrevious}
                >
                  <a className="page-link" href="javascript:void(0)">
                    Previous
                  </a>
                </li>
                {indexPagination.map((item, index) => {
                  return (
                    <>
                      <li
                        className={
                          currentPage === index
                            ? "page-item active"
                            : "page-item"
                        }
                        onClick={() => handleClickPagination(index)}
                      >
                        <a className="page-link" href="javascript:void(0)">
                          {item}
                        </a>
                      </li>
                    </>
                  );
                })}

                <li
                  className="page-item"
                  style={{ pointerEvents: currentPage === 5 ? "none" : "auto" }}
                  onClick={handleClickNext}
                >
                  <a className="page-link" href="javascript:void(0)">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
