import React from 'react';
import Modal from 'react-modal';

//"onRequestClose" = prop in modal to remove the  modal whne background is clicked


const OptionModal = (props) =>{
    return(
    <Modal
        isOpen = {!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleSelectedOption}
        closeTimeoutMS={500}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button
            className="button"
            onClick={(e)=>{
                props.handleSelectedOption();
            }}
        >Okay</button>
    </Modal>
    );
    
};

export default OptionModal;