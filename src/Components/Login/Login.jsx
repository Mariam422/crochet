import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: formData.email, // مهم في Strapi
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error?.message || "Invalid email or password");
      }

      //  Save token + user
      localStorage.setItem("token", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#faedcd]">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-[#fff6e5] rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[30px] font-bold text-[#e76f51] mb-2">
              Crochet_by <span className="text-[#f4a261]">loomy</span>
            </h1>
            <p className="text-sm text-[#7a5c50]">
              Welcome back! Please login to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2 text-[#4e342e]">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7a5c50]"
                  size={18}
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-[#faedcd] border border-[#eadbc8] rounded-lg text-sm text-[#4e342e] outline-none focus:border-[#f4a261]"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2 text-[#4e342e]">
                Password
              </label>

              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7a5c50]"
                  size={18}
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 bg-[#faedcd] border border-[#eadbc8] rounded-lg text-sm text-[#4e342e] outline-none focus:border-[#f4a261]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a5c50]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center">
              <label className="flex items-center cursor-pointer text-sm text-[#4e342e]">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="mr-2 accent-[#f4a261]"
                />
                Remember me
              </label>
            </div>
             <div className="flex items-center gap-2 my-4">
              <div className="h-px flex-1 bg-[#eadbc8]"></div>
              <span className="text-xs text-[#7a5c50]">OR</span>
              <div className="h-px flex-1 bg-[#eadbc8]"></div>
            </div>
            <div className="text-center mt-4 text-sm text-[#7a5c50]">
              <p>
                Don’t have an account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="text-[#e76f51] font-medium cursor-pointer hover:underline"
                >
                  Create new account
                </span>
              </p>
            </div>
           

            {/* Button */}
            <button
              disabled={loading}
              className="bg-[#f4a261] text-white py-3 rounded-lg font-medium transition hover:bg-[#e76f51] active:scale-95"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        {/* Decorative */}
        <div className="text-center mt-6 text-sm text-[#8d5a44]">
          🧶 Start your crochet journey today! 🧶
        </div>
      </div>
    </div>
  );
}
