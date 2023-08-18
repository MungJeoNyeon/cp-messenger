import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div 
      className="
        flex 
        min-h-full 
        flex-col 
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        bg-gray-100
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
          alt="Logo"
        />
        <h2 
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          "
          >
            안녕하세요 절대 이상한 거 아닙니다...<br/>
            혹시나 구글로그인이 불편하시면 맨 아래에 있는 create an account를 누른다음 대충 만들어주세요!<br/>
            회원가입은 위 웹사이트의 oauth 보안 기능이 잘 작동하는지 확인하기 위함입니다!<br/>
            불편하시더라도 수고해주시면 감사합니다! 좋은 하루 보내세요!
        </h2>
      </div>
      <AuthForm />      
  </div>
  )
}

export default Auth;
