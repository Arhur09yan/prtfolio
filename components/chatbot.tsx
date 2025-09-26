"use client";

import React, { useState, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { messages, sendMessage, status, error, setMessages, clearError } =
    useChat({
      transport: new DefaultChatTransport({ api: "/api/chat" }),
    });

  // Handle API errors
  useEffect(() => {
    if (!error) return;
    setMessages((prev) => [
      ...prev,
      {
        id: crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
        role: "assistant",
        parts: [
          {
            type: "text",
            text: "I'm currently unavailable due to provider limits. Please try again later.",
          },
        ],
      },
    ]);
    clearError?.();
  }, [error, setMessages, clearError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || status === "error") return;
    sendMessage({ text: inputValue });
    setInputValue("");
  };

  const renderMessageContent = (message: any) => {
    if (message.content) return message.content;
    if (message.parts && Array.isArray(message.parts))
      return message.parts
        .filter((p: any) => p.type === "text")
        .map((p: any, i: number) => <div key={i}>{p.text}</div>);
    if (message.text) return message.text;
    return "Message content unavailable";
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 h-96 shadow-2xl border-2 flex flex-col">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Bot className="h-4 w-4" /> Ask me about the developer
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex-1 flex flex-col">
            <ScrollArea className="flex-1 px-4">
              <div className="space-y-3 pb-4">
                {messages.length === 0 && (
                  <div className="text-sm text-muted-foreground text-center py-4">
                    Hi! Ask about experience, skills, or projects.
                  </div>
                )}

                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex gap-2 ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`flex gap-2 max-w-[80%] ${
                        m.role === "user" ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      {m.role === "user" ? (
                        <User className="h-6 w-6 p-1 bg-primary text-primary-foreground rounded-full" />
                      ) : (
                        <Bot className="h-6 w-6 p-1 bg-muted text-muted-foreground rounded-full" />
                      )}
                      <div
                        className={`px-3 py-2 rounded-lg text-sm ${
                          m.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {renderMessageContent(m)}
                      </div>
                    </div>
                  </div>
                ))}

                {(status === "streaming" || status === "submitted") && (
                  <div className="flex gap-2 justify-start">
                    <Bot className="h-6 w-6 p-1 bg-muted text-muted-foreground rounded-full flex-shrink-0" />
                    <div className="px-3 py-2 rounded-lg text-sm bg-muted text-muted-foreground">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="border-t p-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about experience, skills..."
                  className="flex-1 text-sm"
                  disabled={status === "streaming" || status === "submitted"}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim() || status === "error"}
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
