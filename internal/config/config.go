package config

import (
	"encoding/json"
	"errors"
	"io/fs"
	"log/slog"
	"os"
)

type Config struct {
	Servers []Server `json:"servers"`
}
type Server struct {
	Name     string `json:"name"`
	User     string `json:"user"`
	Password string `json:"pass"`
	Host     string `json:"host"`
}

func Get() (cfn Config, err error) {
	data, err := os.ReadFile(getConfigPath())
	if err != nil {
		slog.Error("failed to read config")
		if errors.Is(err, fs.ErrNotExist) {
			slog.Error("err was not exists so creating default")
			err = writeDefaultConfig()
			data, err = os.ReadFile(getConfigPath())
		} else {
			slog.Error("err was something else", "err", err)
			return
		}
	}
	err = json.Unmarshal(data, &cfn)
	return
}

func getConfigPath() string {
	if p := os.Getenv("CONFIG_PATH"); p != "" {
		return p
	}
	return "/app/config/config.json"
}

func (c Config) Print() {
	for _, v := range c.Servers {
		slog.Info("SSH server", "name", v.Name, "user", v.User, "pass", v.Password, "host", v.Host)
	}

}

// get server details from name
func GetServer(name string) (Server, error) {
	var srv Server
	config, err := Get()
	if err != nil {
		return srv, err
	}

	for _, v := range config.Servers {
		if v.Name == name {
			srv = v
		}
	}

	return srv, err
}

func writeDefaultConfig() error {
	c := Config{Servers: []Server{{Name: "example name", Password: "example pass", User: "example user", Host: "example host"}}}
	data, err := json.MarshalIndent(c, " ", " ")
	if err != nil {
		return err
	}
	return os.WriteFile(getConfigPath(), data, 0o644)
}
