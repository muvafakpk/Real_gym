import { useState, useEffect } from "react";
import { supabase } from "../../supabase";

export default function Admin() {
  const [session, setSession] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
    if (data.session) fetchMessages();
  };

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login failed");
    } else {
      checkSession();
    }
  };

  const fetchMessages = async () => {
    const { data } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setMessages(data);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  if (!session) {
    return (
      <div style={{ padding: 50 }}>
        <h2>Admin Login</h2>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button onClick={login}>Login</button>
      </div>
    );
  }

return (
  <div className="bg-[#0a0a0a] min-h-screen py-20 px-6">
    <div className="max-w-5xl mx-auto">

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-white">
          Contact <span className="text-[#86BC25]">Messages</span>
        </h2>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 shadow-lg hover:border-[#86BC25] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
              {msg.subject}
            </h3>

            <div className="space-y-2 text-gray-300 text-sm">
              <p>
                <span className="text-white font-medium">Name:</span> {msg.name}
              </p>
              <p>
                <span className="text-white font-medium">Email:</span> {msg.email}
              </p>
              <p>
                <span className="text-white font-medium">Phone:</span> {msg.phone}
              </p>
              <p>
                <span className="text-white font-medium">Message:</span>
              </p>
              <p className="bg-[#0a0a0a] p-3 rounded-md border border-[#2a2a2a]">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {messages.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No contact messages yet.
        </p>
      )}
    </div>
  </div>
);
}