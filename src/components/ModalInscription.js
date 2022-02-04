import { useState } from "react";
import { useUser } from "../hooks/useUser";
import InputComponent from "./InputComponent";
import { motion } from "framer-motion";
import "./styles/ModalInscription.css";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Button";
import { BiChevronRight } from "react-icons/bi";
export default function ModalInscription({
  cancel,
  confirmation,
  title,
  certificate,
  typeInscription,
  loading,
}) {
  const [{ user }, _] = useUser();
  const [isWithCertificate, setIsWithCertificate] = useState(0);
  const [voucher, setVoucher] = useState(null);
  const history = useHistory();

  const handleCancel = () => {
    document.body.classList.remove("overflow");
    cancel();
  };

  const handleConfirmation = () => {
    if (!user) return history.push("/login");
    confirmation({ voucher, certificate: Number(isWithCertificate) });
  };
  return (
    <div className="modal modal_inscription">
      <motion.div
        initial={{ translateY: "-1000px" }}
        animate={{ translateY: 0 }}
      >
        <div className="inscription_update">
          <Link to="/dashboard/profile">
            <span>Actualizar datos </span>
            <BiChevronRight color="var(--black)" size="20" />
          </Link>
        </div>
        <h2 className="title_modal">{title}</h2>
        <div className="inscriptionform_container">
          <InputComponent
            value={user?.nombre}
            nameInput="nombre"
            user={user}
            disabled="true"
            title="Nombres completos"
          />
          <InputComponent
            value={user?.apellidos}
            nameInput="apellidos"
            disabled="true"
            user={user}
            title="Apellidos completos"
          />
          <div className="inscription_certificate">
            <span>Certificado</span>
            <select
              disabled={certificate === "No aplica"}
              onChange={({ target }) => setIsWithCertificate(target.value)}
            >
              <option value="">-- Seleccione --</option>
              <option value="0">No</option>
              <option value="1">Sí</option>
            </select>
          </div>
          {(typeInscription === "Pago" || isWithCertificate == 1) && (
            <div className="voucher_container">
              <label>
                <p>Voucher</p>
                <input
                  className="voucher"
                  type="file"
                  onChange={(ev) => setVoucher(ev.target.files[0])}
                />
                <span>Formato válido(.png, .jpg, .jpeg)</span>
              </label>
            </div>
          )}
        </div>
        <div className="ContainerButtons">
          <button onClick={handleCancel} className="btn_cancel">
            Cancelar
          </button>
          <Button
            text="Inscribirme"
            classes="btn_confirmation"
            loading={loading}
            functionToExecute={handleConfirmation}
          />
        </div>
      </motion.div>
    </div>
  );
}
