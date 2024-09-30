import Router from 'next/router';
import { Button } from 'antd';

function ContactPage() {
  return (
    <div className="bg-white ">
      <div className="min-h-[calc(100vh-150px)] relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full md:w-[50%]">
          <div>
            <img alt="" className="w-[600px] relative left-0" src="/img/img_error_404.svg" />
          </div>
          <div className="flex justify-center mb-2 md:mb-4">
            <h2 className="typography-h2 font-bold">Page Not Found</h2>
          </div>
          <div>
            <Button
              onClick={() => {
                Router?.push('/');
              }}
              color="danger"
              size="large"
              className="w-[158px] sm:w-[188px] xl:w-[200px] h-10 md:h-12"
            >
              <span className="typography-h5">Go to home Page</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
