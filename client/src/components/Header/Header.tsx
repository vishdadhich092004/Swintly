function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold">Swintly</div>
      <div className="flex items-center gap-4">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
}

export default Header;
