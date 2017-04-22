package com.poc;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class BucketUpload implements RequestHandler<UserRequest, UserResponse> {

	public UserResponse handleRequest(UserRequest request, Context context)
	{
		return new UserResponse("Hello !!" + request.getName() + " " + request.getAge());
	}

}
