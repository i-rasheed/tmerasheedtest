import React, { useEffect } from "react";
import "../../components/Footer/Footer.css";
import { useSelector, useDispatch } from "react-redux";
import { listCurrency } from "../../actions/currencyActions";

export default function Footer() {
  const dispatch = useDispatch();

  const currencyList = useSelector((state) => state.currencyList);
  const { loading, error, currencies } = currencyList;

  useEffect(() => {
    dispatch(listCurrency());
  }, [dispatch]);

  return (
    <div className='footer footer-text'>
      <img
        className='copyright'
        src={require("../../assets/footer-text.png")}
        alt='footertext'
      />
      <select className='conversion' name='currency' id='currencies'>
        {loading ? (
          "loading"
        ) : error ? (
          <p>{error}</p>
        ) : (
          currencies.data.currencies.map((ec) => (
            <>
              {/* {<img src={ec.flag_url} alt='flagurl' />} */}
              <option key={ec.locale} value={ec.name}>
                {ec.name}
              </option>
            </>
          ))
        )}
      </select>
    </div>
  );
}
