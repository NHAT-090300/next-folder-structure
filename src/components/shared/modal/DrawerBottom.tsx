import { CSSProperties, ReactNode } from 'react';
import { Drawer, Modal } from 'antd';
import { styled } from 'styled-components';

import { useIsMobile } from '@hooks/index';
import { If } from '@components/condition';

interface IProps {
  visible: boolean;
  onCancel: () => void;
  children: ReactNode;
  bodyStyle?: CSSProperties;
  width?: number;
  title?;
  closable?: boolean;
  className?: string;
  breakPoint?: number;
  borderHeader?: boolean;
  center?: boolean;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
  paddingContent?: boolean;
  zIndex?: number;
}

const ModalStyled = styled(Modal)<{ $isHeader?: boolean; $paddingContent?: boolean }>`
  .ant-modal-content {
    border-radius: 8px !important;
    overflow: hidden !important;
  }
  .ant-modal-header {
    border: none !important;
  }
  .ant-modal-header::after {
    content: '';
    display: flex;
    width: 100%;
    height: ${(props) => (props.$isHeader ? '1px' : '0px')};
    background-color: ${(props) => (props.$isHeader ? '#F4F4F6' : 'none')};
    position: relative;
    top: 16px;
  }
  .ant-modal-body {
    padding: ${(props) => (props.$paddingContent ? '24px !important' : '0px !important')};
  }
`;

const DrawerStyled = styled(Drawer)<{ $isHeader?: boolean; $paddingContent?: boolean }>`
  .ant-drawer-content-wrapper {
    border-radius: 16px 16px 0px 0px !important;
    overflow: hidden !important;
  }
  .ant-drawer-header-title {
    flex-direction: row-reverse !important;
  }
  .ant-drawer-title {
    text-align: center;
  }
  .ant-drawer-header {
    border: none !important;
    display: inline;
  }
  .ant-drawer-header::after {
    content: '';
    display: flex;
    width: 100%;
    height: ${(props) => (props.$isHeader ? '1px' : '0px')};
    background-color: ${(props) => (props.$isHeader ? '#F4F4F6' : 'none')};
    position: relative;
    top: 16px;
  }
  .ant-drawer-body {
    padding: ${(props) => (props.$paddingContent ? '20px !important' : '0px !important')};
  }
`;

export function DrawerBottom({
  visible = false,
  onCancel,
  children,
  bodyStyle,
  width,
  title,
  closable,
  className = '',
  breakPoint = 1180,
  borderHeader = false,
  center = false,
  maskClosable = true,
  destroyOnClose = true,
  paddingContent = true,
  zIndex = null,
}: IProps) {
  const { isMobile } = useIsMobile(breakPoint);
  return (
    <If
      condition={!isMobile}
      Then={
        <ModalStyled
          zIndex={zIndex}
          $isHeader={borderHeader}
          $paddingContent={paddingContent}
          destroyOnClose={destroyOnClose}
          className={className}
          bodyStyle={{ padding: 0, backgroundColor: '#0000', ...bodyStyle }}
          title={title}
          open={visible}
          footer={null}
          closable={closable || null}
          onCancel={onCancel}
          width={width ? width : 800}
          centered={center}
          modalRender={(modal) => <div className="w-full">{modal}</div>}
          maskClosable={maskClosable}
          closeIcon={
            <img
              alt=""
              onClick={onCancel}
              className="w-7 h-7 absolute right-[15px] top-[17px]"
              src="/img/connect-wallet/circle_close.svg"
            />
          }
        >
          {children}
        </ModalStyled>
      }
      Else={
        <DrawerStyled
          zIndex={zIndex}
          $isHeader={borderHeader}
          $paddingContent={paddingContent}
          destroyOnClose={destroyOnClose}
          title={title}
          height="auto"
          placement="bottom"
          closable={closable || null}
          closeIcon={
            <img
              alt=""
              onClick={onCancel}
              className="w-7 h-7 absolute right-[15px] top-[17px]"
              src="/img/connect-wallet/circle_close.svg"
            />
          }
          onClose={onCancel}
          open={visible}
          maskClosable={maskClosable}
        >
          {children}
        </DrawerStyled>
      }
    />
  );
}
