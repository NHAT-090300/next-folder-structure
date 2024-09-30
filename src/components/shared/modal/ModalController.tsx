import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { DrawerBottom } from '@components/shared';
import { modalSelector } from '@store/modal/modal.slice';
import { modalActions } from '@store/actions';

interface Props {
  modalId: string;
  handleClose?: () => void;
  title: string;
  children: ReactNode;
  width?: number;
  breakPoint?: number;
  closable?: boolean;
  maskClosable?: boolean;
  center?: boolean;
  zIndex?: number;
}

export const ModalController = () => {
  const modalState = useSelector(modalSelector);

  const modalOutput = [];

  for (const modalId in modalState) {
    const modal = modalState[modalId];
    if (modal.open) {
      modalOutput.push(modal.modalComponent);
    }
  }
  return (
    <React.Fragment>
      {modalOutput.length
        ? modalOutput.map((modal, index) => <React.Fragment key={index}>{modal}</React.Fragment>)
        : null}
    </React.Fragment>
  );
};

export function ConfirmModal(props: Props) {
  const {
    modalId,
    handleClose,
    title,
    children,
    width = 528,
    breakPoint = 1180,
    closable = true,
    maskClosable = true,
    center = true,
    zIndex,
  } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const modalState = useSelector(modalSelector);
  const modal = modalState[modalId];

  const closeModal = () => {
    if (handleClose) handleClose();
    dispatch(modalActions.closeModal({ modalId }));
  };

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) {
        dispatch(modalActions.resetModal());
      }
      return true;
    });
    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  return (
    <DrawerBottom
      visible={modal?.open}
      destroyOnClose
      closable={closable}
      onCancel={closeModal}
      title={<h4 className="text-lg md:text-2xl text-center font-bold text-gray_800">{title}</h4>}
      borderHeader
      width={width}
      center={center}
      breakPoint={breakPoint}
      maskClosable={maskClosable}
      zIndex={zIndex}
    >
      {children}
    </DrawerBottom>
  );
}
