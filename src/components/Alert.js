import "./styles/Alert.css";
import { motion } from "framer-motion";
import Button from "./Button";
export default function Alert({ loading, message, confirmation, cancel }) {
  const handleCancel = () => {
    document.body.classList.remove("overflow");
    cancel();
  };

  return (
    <div className="modal alert">
      <motion.div
        initial={{ translateY: "-1000px" }}
        animate={{ translateY: 0 }}
      >
        <p className="message">{message}</p>
        <img src="" alt="" />
        <div className="buttons">
          <Button
            cancel={true}
            text="Cancelar"
            classes="btn_cancel"
            functionToExecute={handleCancel}
            loading={loading}
          >
            Cancelar
          </Button>
          <Button
            text="Confirmar"
            classes="btn_confirmation"
            functionToExecute={confirmation}
            loading={loading}
          />
        </div>
      </motion.div>
    </div>
  );
}
