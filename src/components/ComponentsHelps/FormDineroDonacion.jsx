import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormDineroDonacion = ({ idCaso }) => {
    const [formType, setFormType] = useState("Dinero");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitHandler = async (data) => {
        try {
            const response = await fetch("http://localhost:4000/post/helps/i/updateayudarecibida", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    helpId: idCaso,
                    userId: localStorage.getItem('idUser'),
                    ayuda: formType === "Dinero" ? `Donación de dinero: $${data.amount}`
                        : formType === "Medicamentos" ? `Donación de medicamentos: ${data.medication}`
                            : `Donación de alimentos: ${data.foodType}`,
                    estado: "en proceso",
                    tipoDeAyuda: formType,
                    dinero: formType === "Dinero" ? data.amount : 0
                }),
            });

            if (!response.ok) {
                throw new Error("Error al enviar los datos");
            }

            const result = await response.json();
            alert("Datos enviados exitosamente:", result);


        } catch (error) {
            console.error("Hubo un error al enviar los datos:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="donation-form">
            <div style={{ width: "400px", display: "flex", justifyContent: "space-between" }}>
                <button
                    type="button"
                    onClick={() => setFormType("Dinero")}
                    style={{ backgroundColor: formType === "Dinero" && "green", color: formType === "Dinero" && "white" }}
                >
                    Dinero
                </button>
                <button
                    type="button"
                    onClick={() => setFormType("Medicamentos")}
                    style={{ backgroundColor: formType === "Medicamentos" && "green", color: formType === "Medicamentos" && "white" }}
                >
                    Medicamentos
                </button>
                <button
                    type="button"
                    onClick={() => setFormType("Alimento")}
                    style={{ backgroundColor: formType === "Alimento" && "green", color: formType === "Alimento" && "white" }}
                >
                    Alimento
                </button>
            </div>

            {formType === "Dinero" && (
                <div className="form-group">
                    <label htmlFor="amount">Cantidad (en $)</label>
                    <input
                        id="amount"
                        type="number"
                        {...register("amount", { required: "La cantidad es obligatoria" })}
                        placeholder="Ingresa la cantidad de dinero"
                    />
                    {errors.amount && <p>{errors.amount.message}</p>}
                </div>
            )}

            {formType === "Medicamentos" && (
                <div className="form-group">
                    <label htmlFor="medication">Nombre del medicamento</label>
                    <input
                        id="medication"
                        {...register("medication", { required: "El nombre del medicamento es obligatorio" })}
                        placeholder="Ingresa el nombre del medicamento"
                    />
                    {errors.medication && <p>{errors.medication.message}</p>}
                </div>
            )}

            {formType === "Alimento" && (
                <div className="form-group">
                    <label htmlFor="foodType">Tipo de alimento</label>
                    <input
                        id="foodType"
                        {...register("foodType", { required: "El tipo de alimento es obligatorio" })}
                        placeholder="Ingresa el tipo de alimento"
                    />
                    {errors.foodType && <p>{errors.foodType.message}</p>}
                </div>
            )}

            <button type="submit" className="donation-button">
                Donar
            </button>
        </form>
    );
};

export default FormDineroDonacion;
