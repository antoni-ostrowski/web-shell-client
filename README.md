# Web Shell Client

Self-hosted web app I build purely to have usable mobile ssh client on IpadOS. The point of this project is so I can make use of modifier keys that are literally un-mappable on IpadOS and in every ssh client app except for Blink Shell (I think), but it paid and i dont care about 99% of its features.
This simple tool allows me to simply access the shell of the host that the server is running on, and from there I can do stuff on that host or ssh into my main mac mini and do dev work. Frontend is literary just sending inputs to server which pipes them to PTY, and pipes its output back to the client, all via websockets.

> Warning! i dont plan to secure this app in any way, because I rely on Cloudflare Tunnel and Zero Trust policies to enforce access control 


# Todos
- [ ] docker setup
- [ ] saving keymaps to config file
- [ ] frontend styles




