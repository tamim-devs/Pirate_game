"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function SignInPage() {
    const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

  
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });
    
   const { data, error } = await authClient.signIn.email({
      email,
      password,
    });
    console.log({ data, error })
    if(data){
      toast.success("Signed in successfully!", {
        theme: "light",
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push("/");
    }else{
      toast.error("Failed to sign in. Please try again.", {
        theme: "light",
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleGoogleSignIN = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    });
    console.log({ data })
  }

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign IN</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
       
        

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <p className="text-center text-md  text-gray-400">OR</p>
        <Button onClick={handleGoogleSignIN} variant="outline" className="w-full">
          <GrGoogle /> Sign in with Google
        </Button>
      </Form>
    </Card>
  );
}