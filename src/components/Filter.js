import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { TwoThumbInputRange } from "react-two-thumb-input-range";
import "./styles/Filter.css";

export default function Filter({ handleValuesOfRange, handleCategory }) {
  const [values, setValues] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const onValuesChange = (val) => {
    setValues(val);
  };
  const resetShowsFilter = () => {
    setShowFilters(false);
    setShowPriceFilter(false);
    setShowCategoryFilter(false);
  };

  const handleShowFilters = () => setShowFilters(!showFilters);
  const handlePriceFilter = () => setShowPriceFilter(!showPriceFilter);
  const handleCategoryFilter = () => setShowCategoryFilter(!showCategoryFilter);

  const applyValuesOfRange = () => {
    handleValuesOfRange(values);
    resetShowsFilter();
  };

  const applyFilterByCategory = () => {
    const inputs = Array.from(document.getElementsByName("category"));
    const valueSelected = inputs.filter((item) => item.checked);
    handleCategory(valueSelected[0].value);
    resetShowsFilter();
  };
  return (
    <div className="filter">
      <button className="btn_filters" onClick={handleShowFilters}>
        <BiPlus size="20" color="var(--black)" />
        <p>Mas filtros</p>
      </button>
      {showFilters && (
        <div className="dropdown_filter">
          <div>
            <div className="filter_by_price">
              <button className="title_filter" onClick={handlePriceFilter}>
                Por precio
              </button>
              {showPriceFilter && (
                <>
                  <p className="label_info">Elige un rango de precios (S/)</p>
                  <div className="input_range_container">
                    <TwoThumbInputRange
                      onChange={onValuesChange}
                      values={values}
                      min={0}
                      max={500}
                    />
                  </div>
                  <div className="container_btn_filter">
                    <button
                      className="button_filter"
                      onClick={applyValuesOfRange}
                    >
                      Aplicar
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="filter_by_category">
              <button className="title_filter" onClick={handleCategoryFilter}>
                Por categoría
              </button>
              {showCategoryFilter && (
                <>
                  <p className="label_info">Elige una categoria</p>
                  <div className="input_category_container">
                    <label>
                      <input
                        type="radio"
                        defaultChecked
                        name="category"
                        value="Taller"
                      />
                      Taller
                    </label>
                    <label>
                      <input type="radio" name="category" value="Curso" />
                      Curso
                    </label>
                    <label>
                      <input type="radio" name="category" value="Conferencia" />
                      Conferencia
                    </label>
                    <label>
                      <input type="radio" name="category" value="Congreso" />
                      Congreso
                    </label>
                    <label>
                      <input type="radio" name="category" value="Seminario" />
                      Seminario
                    </label>
                  </div>
                  <div className="container_btn_filter">
                    <button
                      className="button_filter"
                      onClick={applyFilterByCategory}
                    >
                      Aplicar
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
