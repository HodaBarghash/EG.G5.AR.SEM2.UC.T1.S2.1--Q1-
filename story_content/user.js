function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eszvKhLy1p":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz02XnKWceZuSQHNUfyg7Rz-tcFd-redVr21AFeyrlSKBTzwwKNGLzWOQMbtJJopmp1/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect")})
	}
	)
}

