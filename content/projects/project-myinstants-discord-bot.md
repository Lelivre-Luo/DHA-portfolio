---
title_en: "MyInstants Discord Bot"
title_zh: "MyInstants Discord 机器人"
description_en: "A discord bot to play MyInstants sounds to your friends."
description_zh: "一个将 MyInstants 音效带入语音频道的 Discord 机器人。"
image: "https://camo.githubusercontent.com/4b1917eff3bda4e61188df670776876b702136fb1dfb9fcbd4bdb8d68189069d/68747470733a2f2f696d616765732d6e612e73736c2d696d616765732d616d617a6f6e2e636f6d2f696d616765732f492f36314c4e416f324b39524c2e706e67"
tags_en: ["Python", "Discord", "Bot"]
tags_zh: ["Python", "Discord", "机器人"]
github: "https://github.com/mgiovani/my-instants-discord-bot"
demo: "https://discord.com/oauth2/authorize?client_id=836019264124354571"
---

# MyInstants Discord Bot

A fun and interactive Discord bot that brings the joy of MyInstants sound effects to your Discord server. This bot allows users to play popular sound clips and memes directly in voice channels, creating an entertaining experience for your community.

## Features

### 🎵 Sound Playback
- Play MyInstants sounds directly in Discord voice channels
- Queue multiple sounds for continuous playback
- High-quality audio streaming
- Support for various audio formats

### 🔍 Sound Search
- Search for sounds by name or keywords
- Browse popular sounds by category
- Random sound selection
- Sound recommendations

### 🎮 Interactive Commands
- Easy-to-use slash commands
- User-friendly interface
- Real-time feedback
- Error handling and validation

## Technical Implementation

### Core Technologies
- **Python 3.8+**: Primary programming language
- **discord.py**: Discord API wrapper
- **asyncio**: Asynchronous programming
- **aiohttp**: HTTP client for API requests
- **youtube-dl**: Audio extraction and processing

### Architecture
The bot follows a modular architecture with clear separation of concerns:

```
src/
├── bot/              # Main bot logic
├── commands/         # Command handlers
├── services/         # External service integrations
├── utils/            # Utility functions
└── config/          # Configuration management
```

### Key Components

#### Bot Core
```python
import discord
from discord.ext import commands

class MyInstantsBot(commands.Bot):
    def __init__(self):
        intents = discord.Intents.default()
        intents.message_content = True
        intents.voice_states = True
        
        super().__init__(
            command_prefix='!',
            intents=intents,
            help_command=None
        )
    
    async def on_ready(self):
        print(f'{self.user} has connected to Discord!')
        await self.sync_commands()
```

#### Sound Service
```python
import aiohttp
import asyncio
from typing import List, Dict

class SoundService:
    def __init__(self):
        self.base_url = "https://www.myinstants.com/api"
        self.session = None
    
    async def search_sounds(self, query: str) -> List[Dict]:
        """Search for sounds matching the query"""
        async with self.session.get(
            f"{self.base_url}/search",
            params={"q": query}
        ) as response:
            return await response.json()
    
    async def get_sound_url(self, sound_id: str) -> str:
        """Get the direct URL for a sound file"""
        async with self.session.get(
            f"{self.base_url}/sound/{sound_id}"
        ) as response:
            data = await response.json()
            return data.get("url")
```

#### Voice Management
```python
import discord
from discord.ext import commands

class VoiceCommands(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.voice_clients = {}
    
    @commands.slash_command(name="play", description="Play a sound")
    async def play_sound(self, ctx, sound_name: str):
        """Play a sound in the user's voice channel"""
        if not ctx.author.voice:
            await ctx.respond("You need to be in a voice channel!")
            return
        
        voice_channel = ctx.author.voice.channel
        
        if ctx.guild.id not in self.voice_clients:
            voice_client = await voice_channel.connect()
            self.voice_clients[ctx.guild.id] = voice_client
        else:
            voice_client = self.voice_clients[ctx.guild.id]
        
        # Play the sound
        await self._play_sound_file(voice_client, sound_name)
        await ctx.respond(f"Playing: {sound_name}")
```

## Installation and Setup

### Prerequisites
- Python 3.8 or higher
- Discord Bot Token
- MyInstants API access

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/mgiovani/my-instants-discord-bot.git
cd my-instants-discord-bot
```

2. **Install dependencies**
```bash
pip install -r requirements.txt
```

3. **Configure environment variables**
```bash
# Create .env file
DISCORD_TOKEN=your_discord_bot_token
MYINSTANTS_API_KEY=your_api_key
```

4. **Run the bot**
```bash
python main.py
```

### Discord Bot Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to the "Bot" section
4. Create a bot and copy the token
5. Enable necessary intents (Message Content, Voice States)
6. Invite the bot to your server with appropriate permissions

## Usage

### Basic Commands

#### Play a Sound
```
/play sound_name
```
Plays the specified sound in your voice channel.

#### Search Sounds
```
/search query
```
Searches for sounds matching your query.

#### List Popular Sounds
```
/popular
```
Shows a list of popular sounds.

#### Stop Playback
```
/stop
```
Stops the current sound and clears the queue.

### Advanced Features

#### Sound Queue
- Add multiple sounds to a queue
- Automatic playback of queued sounds
- Queue management commands

#### Sound Categories
- Browse sounds by category
- Filter by popularity or date
- Random sound selection

#### User Preferences
- Save favorite sounds
- Custom sound collections
- Personal playlists

## Configuration

### Bot Settings
```python
# config/settings.py
BOT_SETTINGS = {
    "command_prefix": "!",
    "max_queue_size": 10,
    "max_sound_duration": 300,  # 5 minutes
    "default_volume": 0.5,
    "auto_disconnect_delay": 300  # 5 minutes
}
```

### Sound Settings
```python
SOUND_SETTINGS = {
    "supported_formats": [".mp3", ".wav", ".ogg"],
    "max_file_size": 10 * 1024 * 1024,  # 10MB
    "quality": "high",
    "bitrate": 128
}
```

## Error Handling

The bot includes comprehensive error handling for various scenarios:

- **Voice Channel Issues**: Handles cases where users aren't in voice channels
- **Network Errors**: Manages API failures and timeouts
- **Audio Issues**: Handles corrupted or unsupported audio files
- **Permission Errors**: Manages Discord permission issues
- **Rate Limiting**: Implements proper rate limiting for API calls

## Performance Optimization

### Caching
- Sound metadata caching
- User preference caching
- API response caching

### Resource Management
- Efficient memory usage
- Proper cleanup of voice connections
- Background task management

### Monitoring
- Performance metrics collection
- Error logging and reporting
- Usage statistics

## Contributing

We welcome contributions from the community! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Install development dependencies
4. Make your changes
5. Add tests if applicable
6. Submit a pull request

### Areas for Contribution
- New sound sources
- Additional commands
- UI improvements
- Performance optimizations
- Documentation updates
- Bug fixes

## Troubleshooting

### Common Issues

#### Bot Not Responding
- Check if the bot is online
- Verify bot permissions
- Check command syntax

#### Audio Not Playing
- Ensure you're in a voice channel
- Check audio permissions
- Verify sound file availability

#### API Errors
- Check API key configuration
- Verify network connectivity
- Check rate limiting

### Getting Help
- Check the [Issues](https://github.com/mgiovani/my-instants-discord-bot/issues) page
- Join our [Discord server](https://discord.gg/your-server)
- Read the [documentation](https://github.com/mgiovani/my-instants-discord-bot/wiki)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Discord.py community for the excellent library
- MyInstants for providing the sound API
- All contributors and users who helped improve the bot

---

*Bring the fun of MyInstants to your Discord server!*
