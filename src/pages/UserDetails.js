import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./styles/UserDetails.css";
import { BsArrowRightShort } from "react-icons/bs";
import { updateuser } from "../utils/updateuser";
import Layout from "../components/Layout";
import { useUser } from "../hooks/useUser";
import chargeImage from "../utils/chargeImage";
import updateProfileWithImage from "../utils/updateProfileWithImage";
import TitleSection from "../components/TitleSection";
import ImageProfile from "../components/ImageProfile";
import InputComponent from "../components/InputComponent";
import Alert from "../components/Alert";
import handleOpenModal from "../utils/handleOpenModal";
import { getProfileData } from "../utils/getUser";
import InitialModalToGender from "../components/InitialModalToGender";

export default function UserDetails() {
  const [_, dispatch] = useUser();
  const [user, setUser] = useState(null);
  const [alert, setShowAlert] = useState(null);
  const sexoRef = useRef();
  const [file, setFile] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);

  const updateGender = (option) => {
    const token = localStorage.getItem("token");
    const photo = updateDefaultAvatar(option);
    const data = { ...user, sexo: option, foto: photo };
    setUser(data);
    updateuser(user.id, data, token);
    showGenderModal && setShowGenderModal(false);
    document.body.classList.remove("overflow");
  };
  const handleSelectGender = () => {
    handleOpenModal(setShowGenderModal);
  };

  const updateDefaultAvatar = (option) => {
    const photo =
      option === "F"
        ? "https://fernandoimages.imgix.net/prueba/female-avatar-woman-profile-icon-for-network-vector.jpg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400"
        : option === "M"
        ? "https://fernandoimages.imgix.net/prueba/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400"
        : "https://fernandoimages.imgix.net/prueba/gender-neutral-user.png?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400";
    return photo;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    getProfileData(token)
      .then((data) => {
        setUser(data);
        if (data.sexo === null) handleSelectGender(setShowGenderModal);
      })
      .catch((err) => console.error(err.message));
  }, []);

  const handleUploadImage = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    if (e.target.files[0]) chargeImage(e.target.files[0], setImageUploaded);
  };

  const cancelUpdate = () => {
    setShowAlert(false);
  };

  const updateLocaleUser = (user) => {
    dispatch({
      type: "UPDATE_USER",
      payload: {
        nombre: user.nombre,
        apellidos: user.apellidos,
        foto: user.foto,
      },
    });
  };
  const updateProfile = async (ev) => {
    ev.preventDefault();
    const token = localStorage.getItem("token");
    setLoading(true);
    if (!file) {
      const data = { ...user, sexo: sexoRef.current.value };
      updateuser(user.id, data, token)
        .then(() => {
          setLoading(false);
          setShowAlert(false);
          // window.location.reload();
        })
        .catch((err) => {
          setLoading(false);
        });
    } else {
      const data = { ...user, sexo: sexoRef.current.value };
      await updateProfileWithImage(
        file,
        updateuser,
        user.id,
        token,
        data,
        updateLocaleUser,
        setLoading,
        setShowAlert
      );
    }
  };

  const removeImage = () => {
    setFile(null);
    setImageUploaded(null);
  };

  const handleSaveUpdate = () => handleOpenModal(setShowAlert);

  return (
    <Layout>
      <TitleSection title="Mi perfil" />
      <div className="Perfil-Container container_radius">
        <div className="ContainerForm__header">
          <h3 className="Subtitle--modify">Detalles del Usuario</h3>
          <button className="save_profile" onClick={handleSaveUpdate}>
            <span>Guardar</span>
            <BsArrowRightShort cursor="pointer" size="25" />
          </button>
        </div>
        <form className="ContainerForm">
          <div className="ContainerFormLeft">
            <ImageProfile
              imageUploaded={imageUploaded}
              removeImage={removeImage}
              handleUploadImage={handleUploadImage}
              user={user}
            />
            <div className="row">
              <InputComponent
                value={user?.nombres}
                nameInput="nombre"
                setUser={setUser}
                user={user}
                title="Nombres completos"
              />
              <InputComponent
                value={user?.apellidos}
                nameInput="apellidos"
                setUser={setUser}
                user={user}
                title="Apellidos completos"
              />
            </div>
            <InputComponent
              value={user?.email}
              nameInput="apellidos"
              setUser={setUser}
              user={user}
              title="Correo"
              type="email"
              disabled="true"
            />
          </div>

          <div className="ContainerFormRight">
            <InputComponent
              value={user?.celular}
              nameInput="celular"
              setUser={setUser}
              user={user}
              title="Teléfono"
            />
            <InputComponent
              value={user?.edad}
              nameInput="edad"
              setUser={setUser}
              user={user}
              title="Edad"
              min="1"
              type="number"
            />
            <label className="ContainerFormRight__label" htmlFor="sex">
              <span>Sexo</span>
              <select id="sex" ref={sexoRef}>
                <option value="">-- Seleccione --</option>
                <option value="M" selected={user?.sexo === "M" ? true : false}>
                  Masculino
                </option>
                <option value="F" selected={user?.sexo === "F" ? true : false}>
                  Femenino
                </option>
                <option value="N" selected={user?.sexo === "N" ? true : false}>
                  Otro
                </option>
              </select>
            </label>
            <InputComponent
              value={user?.ocupacion}
              nameInput="ocupacion"
              setUser={setUser}
              user={user}
              title="Ocupación"
            />
          </div>
        </form>
      </div>
      {alert &&
        createPortal(
          <Alert
            loading={loading}
            message="Estas seguro que deseas actualizar tu perfil?"
            confirmation={updateProfile}
            cancel={cancelUpdate}
          />,
          document.getElementById("alert")
        )}
      {showGenderModal &&
        createPortal(
          <InitialModalToGender selectOption={updateGender} />,
          document.getElementById("alert")
        )}
    </Layout>
  );
}
