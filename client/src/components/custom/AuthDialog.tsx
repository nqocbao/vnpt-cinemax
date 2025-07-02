import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { CheckCircle, XCircle, Clock, Loader2 } from "lucide-react";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error" | "loading";
  action: "login" | "register";
  message: string;
  onRedirect?: () => void;
}

const AuthDialog: React.FC<AuthDialogProps> = ({
  isOpen,
  onClose,
  type,
  action,
  message,
  onRedirect,
}) => {
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    if (isOpen && type === "success") {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            if (onRedirect) {
              onRedirect();
            }
            onClose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen, type, onRedirect, onClose]);

  useEffect(() => {
    if (isOpen) {
      setCountdown(4);
    }
  }, [isOpen]);

  const getTitle = () => {
    if (type === "success") {
      return "Success!";
    }
    if (type === "loading"){
      return "Đang tải..."
    }
    return "Có lỗi xảy ra!";
  };

  const getIcon = () => {
    if (type === "success") {
      return <CheckCircle className="w-12 h-12 text-green-500" />;
    }
    if (type === "loading") {
      return <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />;
    }
    return <XCircle className="w-12 h-12 text-red-500" />;
  };

  const getMessageColor = () => {
    return type === "success" ? "text-green-700" : "text-red-700";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-lg font-semibold">
            {getIcon()}
            {getTitle()}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {type === "loading" ? (
            <p className="text-center text-blue-700 text-sm">Đang tải...</p>
          ): (
            <p className={`text-center text-sm ${getMessageColor()}`}>
              {message}
            </p>
          )}

          {type === "success" && (
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Chuyển hướng tới trang chủ trong {countdown} giây</span>
            </div>
          )}

          {type === "error" && (
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
              >
                Đóng
              </button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
