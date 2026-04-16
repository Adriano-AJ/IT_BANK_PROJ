export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 p-10">
      <h1 className="text-3xl text-center font-bold">
        Impacta Bank
      </h1>
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <h3 className="text-center">Enter with your E-mail to do login</h3>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <button type="button">Sign Up</button>
      </div>
      <hr />
      <span>Conheca nossa politica de privacidade</span>
    </div>
  );
}